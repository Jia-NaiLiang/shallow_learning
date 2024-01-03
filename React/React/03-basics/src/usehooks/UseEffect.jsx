import { useEffect, useState } from "react";

function UseEffect() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("Re-render");
  });

  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    document.title = title;

    const timer = setTimeout(() => {
      console.log(title);
    }, 1000);

    console.log(`Render because value changed`);

    return () => {
      clearTimeout(timer);
    };
  }, [title]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>{title}</span>
    </div>
  );
}

export default UseEffect;
