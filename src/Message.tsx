function Message() {
  const name = `Omar`;

  if (name) {
    // jsx : javaScript XML
    return <h1>Hello, {name}!</h1>;
  } else {
    return <h1>Hello, Guest!</h1>;
  }
}

export default Message;
