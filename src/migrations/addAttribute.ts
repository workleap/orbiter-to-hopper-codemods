import { ASTPath, JSXOpeningElement } from "jscodeshift";
import { Runtime } from "../utils/types.js";

export function addAttribute(
  openingElement: ASTPath<JSXOpeningElement>,
  newAttrName: string,
  newAttrValue: string | number | boolean | null,
  runtime: Runtime
): void {
  const { j, root } = runtime;

  const attributes = openingElement.node.attributes || [];
  const sourceAttribute = attributes.find(
    (attr: any) => attr.name && attr.name.name === newAttrName
  );

  if (sourceAttribute) return; // Skip if the attribute already exists

  const createAttributeValue = (value: string | number | boolean | null) => {
    if (value === null) return null;
    if (typeof value === "string") return j.stringLiteral(value);
    if (typeof value === "number")
      return j.jsxExpressionContainer(j.literal(value));
    if (typeof value === "boolean")
      return j.jsxExpressionContainer(j.literal(value));
    return null;
  };

  const newAttributeNode = j.jsxAttribute(
    j.jsxIdentifier(newAttrName),
    createAttributeValue(newAttrValue)
  );

  attributes.push(newAttributeNode);
  openingElement.node.attributes = attributes;
}
