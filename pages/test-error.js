export default function TestErrorPage() {
    throw new Error("This is a test error");
    return <div>This will not render</div>;
  }
  