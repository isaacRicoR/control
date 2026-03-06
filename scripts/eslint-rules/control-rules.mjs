/**
 * Custom ESLint rules for Control project.
 * v9 Flat Config compatible.
 */

const HOOKS = [
  "useState",
  "useEffect",
  "useContext",
  "useMemo",
  "useCallback",
  "useRef",
  "useLayoutEffect",
  "useSearchParams",
  "usePathname",
  "useRouter",
];

const plugin = {
  rules: {
    "require-use-client-when-using-hooks": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Enforce 'use client' directive when using React or Next.js hooks in UI/App components.",
          category: "Best Practices",
          recommended: true,
        },
        fixable: null,
        schema: [], // no options
      },
      create(context) {
        let hasUseClient = false;
        let usesHooks = false;
        let reported = false;

        return {
          Program(node) {
            // Check for "use client" directive
            if (node.body.length > 0) {
              // Directives in ESLint are often handled via the 'directives' property 
              // on the Program node in some parsers, or as ExpressionStatements 
              // with a Literal value.
              const firstStatement = node.body[0];
              
              // Check for actual directives if available (e.g. by @typescript-eslint/parser)
              if (node.directives && node.directives.some(d => d.value.value === "use client")) {
                hasUseClient = true;
              } else if (
                firstStatement.type === "ExpressionStatement" &&
                firstStatement.expression.type === "Literal" &&
                firstStatement.expression.value === "use client"
              ) {
                hasUseClient = true;
              }
            }
          },

          // Check for hook usage (CallExpression)
          CallExpression(node) {
            if (reported) return;
            
            let calleeName = "";
            if (node.callee.type === "Identifier") {
              calleeName = node.callee.name;
            } else if (node.callee.type === "MemberExpression" && node.callee.property.type === "Identifier") {
              // React.useState(...)
              calleeName = node.callee.property.name;
            }

            if (HOOKS.includes(calleeName)) {
              usesHooks = true;
            }
          },

          // Check for hook imports
          ImportSpecifier(node) {
            if (reported) return;
            if (HOOKS.includes(node.imported.name)) {
              usesHooks = true;
            }
          },

          "Program:exit"(node) {
            if (usesHooks && !hasUseClient && !reported) {
              reported = true;
              context.report({
                node: node,
                message: "UI component uses React/Next hooks but is missing 'use client' directive.",
              });
            }
          },
        };
      },
    },

    "no-inline-border-radius": {
      meta: {
        type: "problem",
        docs: {
          description: "No uses style.borderRadius. Usa Button shape=... o tokens vía Design System.",
          category: "Best Practices",
          recommended: true,
        },
        fixable: null,
        schema: [],
      },
      create(context) {
        const filename = context.getFilename?.() ?? "";
        const isCritical =
          filename.includes("FormActions.tsx") ||
          filename.includes("PanelCardFooter.tsx");
        if (!isCritical) return {};

        return {
          JSXAttribute(node) {
            const name = node.name?.name ?? node.name?.value;
            if (name !== "style") return;

            const expr = node.value?.expression ?? node.value;
            if (!expr || expr.type !== "ObjectExpression") return;

            for (const prop of expr.properties) {
              const key = prop.key?.name ?? prop.key?.value;
              if (key === "borderRadius") {
                context.report({
                  node: prop,
                  message:
                    "No uses style.borderRadius. Usa Button shape=... o tokens vía Design System.",
                });
                return;
              }
            }
          },
        };
      },
    },

    "require-panel-button-shape-in-footers": {
      meta: {
        type: "problem",
        docs: {
          description: "En footers de panel debes usar <Button shape='panel' ...>.",
          category: "Best Practices",
          recommended: true,
        },
        fixable: null,
        schema: [],
      },
      create(context) {
        const filename = context.getFilename?.() ?? "";
        const isFormActions = filename.includes("FormActions.tsx");
        const isPanelCardFooter = filename.includes("PanelCardFooter.tsx");
        if (!isFormActions && !isPanelCardFooter) return {};

        return {
          JSXOpeningElement(node) {
            const tagName =
              node.name?.name ?? node.name?.property?.name ?? "";
            if (tagName !== "Button") return;

            let hasShapePanel = false;
            for (const attr of node.attributes) {
              if (attr.type !== "JSXAttribute") continue;
              const attrName = attr.name?.name ?? attr.name?.value;
              if (attrName !== "shape") continue;

              const val = attr.value?.expression ?? attr.value;
              if (val?.type === "Literal" && val.value === "panel") {
                hasShapePanel = true;
                break;
              }
            }

            if (!hasShapePanel) {
              context.report({
                node,
                message: "En footers de panel debes usar <Button shape='panel' ...>.",
              });
            }
          },
        };
      },
    },
  },
};

export default plugin;
