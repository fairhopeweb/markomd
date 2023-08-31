import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`Hello <!>${_escapeXML(input.name)}${_markResumeNode(_scope0_id, "#text/0")}!`);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-template/hello.marko");