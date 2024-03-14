export const LearnReactData = [
  {
    id: 1,
    title: "Introduction to React Js",
    Discription: `This page is like a big picture of React JS. I've gathered all my knowledge from React docs and other sources to make it easy for everyone to understand. I hope you enjoy reading about this cool library!`,
    
    SubMenus: [],
    Topics: [
      {
        subTitle: "What is React Js",
        id: "#what-react",
        content: `React is a free, open-source library for quickly
             building user interfaces (UI) based on components. The term 'UI' refers to everything displayed on the 
             screen that users interact with. Simply put, a 'component' is a piece of code designed to perform a specific task.
              For example, a component could be responsible for creating a card. We will delve into the details of what a component
               is and why we use it later in this discussion.`,
      },
      {
        subTitle: "Why we use React Js",
        id: "#why-react",
        content: `<p>There are several reasons why React.js is widely used, as listed below:</p>
            <ul class="list-disc pl-6"><li><span class="font-bold">Component-Based Architecture:</span> React.js follows a component-based architecture,
             allowing you to create reusable components easily. This enhances code maintainability and reusability.</li><li><span class="font-bold">Speed:</span>
              The development process is accelerated due to the component-based architecture of React. Reusing components 
              streamlines the development workflow.</li><li><span class="font-bold">Virtual DOM:</span> React employs a Virtual DOM, 
              a concept we'll delve into later. For now, understand it as a lightweight copy of the real DOM, enhancing performance
               by minimizing direct manipulations.</li><li><span class="font-bold">Mobile App Development:</span> 
               React provides a seamless transition to mobile app development through React Native. If you're already
                familiar with React, venturing into mobile development becomes more accessible.</li><li><span
                 class="font-bold">JSX (JavaScript XML):</span> React uses JSX, a syntax extension that allows you to write declarative HTML
                  directly within JavaScript. Browsers interpret JSX by building DOM trees, facilitating the creation of interactive UIs
                   through JavaScript manipulation.</li></ul>`,
      },
      {
        subTitle: "When we use React Js",
        id: "#when-react",
        content: `<p class="text-white text-slate-200 text-justify py-2">Now
             you have a enough knowledge of React JS to understand when to use React JS. so how you know when to use React js in your 
             next web development project. Hers are some considration given below<ul class="list-disc pl-6"><li><span class="font-bold">
             Complex User Interface:</span>React is great for making websites that do tricky things. If your website needs
              to show changing information or cool graphics that move around, React can make it work really well. It helps you create a 
              website where everything happens smoothly and quickly for the people using it.</li><li><span class="font-bold">Large Scale
               Applications:</span>With React, you can build your website in a smart way. It helps you make small, reusable pieces of code 
               that can grow with your website. This is useful when your website gets bigger because React makes it easy to manage, expand,
                and change things.</li><li><span class="font-bold">Cross Plateform Applications:</span>React is really good at showing lots
                 of things on your website without making it slow. It uses smart ways to display a bunch of information and make your
                  website work fast, even if there's a lot happening.</li><li><span class="font-bold">Heigh Performance Applications:
                  </span>You can use React to create websites, mobile apps, and computer programs. It's a flexible tool that works for
                   different types of projects. If you want to make a mobile app, you can use React Native. If you're making a computer
                    program, React Desktop lets you do it using web technology.</li></ul></p>`,
      },
    ],
  },
];
