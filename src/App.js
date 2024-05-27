import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How do we get it revised?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordian">
      {data.map((el, index) => (
        <AccordianItem
          title={el.title}
          num={index}
          key={el.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.text}
        </AccordianItem>
      ))}

      <AccordianItem
        title="React Component"
        num="8"
        key="react"
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        <p>Allows react developer to:</p>
        <ul>
          <li>Break up UI into component</li>
          <li>Create interactive single page application.</li>

          <li>Pass information using state and props</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ num, title, text, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;

  function handleToggle() {
    //setIsOpen((isOpen) => !isOpen);
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0 ${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
