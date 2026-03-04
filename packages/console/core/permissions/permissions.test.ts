import { describe, it } from 'node:test';
import assert from 'node:assert';
import { can } from './can';
import { type Entity, type Action } from './permissionMatrix';
import { type UserRole } from '../auth/session.types';

describe('Permissions: can()', () => {
    it('OWNER should have all permissions (true)', () => {
        const entities: Entity[] = ['users', 'devices'];
        const actions: Action[] = ['view', 'create', 'edit', 'delete'];

        for (const entity of entities) {
            for (const action of actions) {
                assert.strictEqual(can('OWNER', entity, action), true, `OWNER should be able to ${action} ${entity}`);
            }
        }
    });

    it('VIEWER should only have view permissions (true) and others (false)', () => {
        const entities: Entity[] = ['users', 'devices'];
        const writeActions: Action[] = ['create', 'edit', 'delete'];

        for (const entity of entities) {
            assert.strictEqual(can('VIEWER', entity, 'view'), true, `VIEWER should be able to view ${entity}`);
            for (const action of writeActions) {
                assert.strictEqual(can('VIEWER', entity, action), false, `VIEWER should NOT be able to ${action} ${entity}`);
            }
        }
    });

    it('GUEST should only have view permissions (true) and others (false)', () => {
        const entities: Entity[] = ['users', 'devices'];
        const writeActions: Action[] = ['create', 'edit', 'delete'];

        for (const entity of entities) {
            assert.strictEqual(can('GUEST', entity, 'view'), true, `GUEST should be able to view ${entity}`);
            for (const action of writeActions) {
                assert.strictEqual(can('GUEST', entity, action), false, `GUEST should NOT be able to ${action} ${entity}`);
            }
        }
    });

    it('MEMBER should have create/edit permissions for devices (true) but NOT for users (false)', () => {
        // Users
        assert.strictEqual(can('MEMBER', 'users', 'view'), true, 'MEMBER can view users');
        assert.strictEqual(can('MEMBER', 'users', 'create'), false, 'MEMBER cannot create users');
        assert.strictEqual(can('MEMBER', 'users', 'edit'), false, 'MEMBER cannot edit users');
        assert.strictEqual(can('MEMBER', 'users', 'delete'), false, 'MEMBER cannot delete users');

        // Devices
        assert.strictEqual(can('MEMBER', 'devices', 'view'), true, 'MEMBER can view devices');
        assert.strictEqual(can('MEMBER', 'devices', 'create'), true, 'MEMBER can create devices');
        assert.strictEqual(can('MEMBER', 'devices', 'edit'), true, 'MEMBER can edit devices');
        assert.strictEqual(can('MEMBER', 'devices', 'delete'), false, 'MEMBER cannot delete devices');
    });

    it('Invalid role should return false for all actions', () => {
        // @ts-expect-error - testing runtime safety for invalid roles
        assert.strictEqual(can('INVALID_ROLE' as unknown as UserRole, 'users', 'view'), false);
    });
});
