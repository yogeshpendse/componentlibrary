import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const Codesnnippet = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};
export default Codesnnippet;
