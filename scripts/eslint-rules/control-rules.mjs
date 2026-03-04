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
  },
};

export default plugin;
