import { useState } from "react";

const App = () => {
  // State to store the joke data. Initialized to null.
  const [joke, setJoke] = useState(null);

  // Async function to fetch a random joke from the API
  const getJoke = async () => {
    try {
      // Fetch data from the joke API
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Parse the response as JSON
      const data = await response.json();
      // Update the joke state with the fetched data
      setJoke(data);
    } catch (error) {
      console.error("Could not fetch joke:", error);
      // Optionally, you can set an error state here to show a message to the user
    }
  };

  return (
    // Main container with background and layout styles
    <div className="w-screen h-screen bg-gradient-to-br from-blue-200 to-indigo-100 flex items-center justify-center flex-col gap-10 p-4">
      {/* Joke display card */}
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl bg-amber-100 text-black flex items-center text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-2xl flex-col p-6 sm:p-8 md:p-10 justify-center min-h-80 gap-4">
        {/* Conditional rendering: Display joke if available, otherwise show a welcome message */}
        {joke ? (
          // Display the setup and punchline of the joke
          <div className="flex flex-col gap-2 font-normal">
            <p className="text-black">
              <span className="font-bold">Setup: </span>
              {joke.setup}
            </p>
            <p className="text-black">
              <span className="font-bold">Punchline: </span>
              {joke.punchline} 😂😁
            </p>
          </div>
        ) : (
          // Display a welcome message when no joke is loaded
          <div className="flex flex-col gap-2 text-xl text-center font-normal md:text-3xl sm:text-2xl">
            <p className="text-black">Hey there 👋 How was your day?</p>
            <p className="text-black">Wanna hear something funny? 😄</p>
          </div>
        )}
        {/* Button to fetch a new joke */}
        <button
          onClick={getJoke}
          className="bg-[#334D65] text-white font-normal py-3 px-6 rounded-lg active:scale-90 cursor-pointer w-auto sm:w-[200px] md:w-[350px] mt-4"
        >
          Tell me a joke
        </button>
      </div>
      {/* Footer section with credits */}
      <div className="text-base sm:text-lg md:text-2xl text-gray-600 text-center px-4">
        <p>
          Developed with ❤️ by{" "}
          <span className="font-bold italic">Ravi Goswami</span> For the <br />{" "}
          source code visit{" "}
          <a
            href="https://github.com/ravig0swami"
            className="text-blue-500 cursor-pointer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
