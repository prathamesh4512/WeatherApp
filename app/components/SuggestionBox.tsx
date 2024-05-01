import React from 'react'

type Props = {showSuggestions: boolean;
    cities: string[];
    handleSuggestionClick: (item: string) => void;
    error: string;}

const SuggestionBox = ({
    showSuggestions,
    cities,
    handleSuggestionClick,
    error
  }: Props) => {
    return (
        <>
          {((showSuggestions) || error) && (
            <ul className="mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
              {error || cities.length < 1 && (
                <li className="text-red-500 p-1 "> { "Location not found"}</li>
              )}
              {cities.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(item)}
                  className="cursor-pointer p-1 rounded   hover:bg-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </>
      );
}

export default SuggestionBox;