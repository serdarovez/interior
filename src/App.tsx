import { useState } from "react";
import background from "../src/assets/background.jpg";
import wall1 from "../src/assets/wall1.png";
import wall2 from "../src/assets/wall2.png";
import wall3 from "../src/assets/wall3.png";
import sofa1 from "../src/assets/sofa1.png";
import sofa2 from "../src/assets/sofa2.png";
import sofa3 from "../src/assets/sofa3.png";
import carpet1 from "../src/assets/carpet1.png";
import carpet2 from "../src/assets/carpet2.png";
import carpet3 from "../src/assets/carpet3.png";
import shelf1 from "../src/assets/shelf1.png";
import shelf2 from "../src/assets/shelf2.png";
import shelf3 from "../src/assets/shelf3.png";

// Define a type for the categories object
type CategoryKey = "wall" | "shelf" | "carpet" | "sofa";

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(
    null
  );
  const [selectedImages, setSelectedImages] = useState({
    wall: wall1,
    shelf: shelf1,
    carpet: carpet1,
    sofa: sofa1,
  });
  const [showVariants, setShowVariants] = useState(false);

  const categories: Record<CategoryKey, string[]> = {
    wall: [wall1, wall2, wall3],
    shelf: [shelf1, shelf2, shelf3],
    carpet: [carpet1, carpet2, carpet3],
    sofa: [sofa1, sofa2, sofa3],
  };

  const handleCategoryClick = (category: CategoryKey) => {
    setActiveCategory(category);
    setShowVariants(true); // Show variants and hide buttons
  };

  const handleVariantClick = (category: CategoryKey, variant: string) => {
    setSelectedImages((prev) => ({
      ...prev,
      [category]: variant,
    }));
  };

  const handleApplyChanges = () => {
    setShowVariants(false); // Hide variants and show buttons
    setActiveCategory(null); // Reset active category
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Overlay Images */}
      {[
        { src: selectedImages.wall, alt: "wall", name: "wall", zIndex: 1 },
        { src: selectedImages.shelf, alt: "shelf", name: "shelf", zIndex: 2 },
        {
          src: selectedImages.carpet,
          alt: "carpet",
          name: "carpet",
          zIndex: 3,
        },
        { src: selectedImages.sofa, alt: "sofa", name: "sofa", zIndex: 4 },
      ].map((image) => (
        <img
          key={image.name}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 object-cover w-full h-full `}
        />
      ))}
      {!showVariants && (
        <div>
          <svg
            className="absolute bg-black p-1 opacity-70 rounded-full top-[40%] left-[20%] z-[10]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="location"
            width={40}
            fill="white"
            onClick={() => handleCategoryClick("wall")}
          >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
          </svg>
          <svg
            className="absolute bg-black p-1 opacity-70 rounded-full bottom-[10%] left-[35%] z-[10]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="location"
            width={40}
            fill="white"
            onClick={() => handleCategoryClick("carpet")}
          >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
          </svg>
          <svg
            className="absolute bg-black p-1 opacity-70 rounded-full bottom-[22%] right-[30%] z-[10]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="location"
            width={40}
            fill="white"
            onClick={() => handleCategoryClick("sofa")}
          >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
          </svg>
          <svg
            className="absolute bg-black opacity-70 p-1 rounded-full top-[45%] right-[5%] z-[10]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="location"
            width={40}
            fill="white"
            onClick={() => handleCategoryClick("shelf")}
          >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
          </svg>
        </div>
      )}
      {showVariants && activeCategory && (
        <svg
          onClick={handleApplyChanges}
          className="bg-green-800 rounded-full absolute bottom-[15%] right-[40%] opacity-75 hover:opacity-100 p-2"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="white"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 24 24"
          id="tick"
        >
          <path d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72z" />
        </svg>
      )}
      {showVariants && activeCategory && (
        <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2 flex  items-center space-y-4 z-[5]">
          <div className="flex w-full items-center space-x-4">
            {categories[activeCategory].map(
              (variant: string, index: number) => (
                <div
                  key={index}
                  onClick={() => handleVariantClick(activeCategory, variant)}
                  className={`relative bg-white rounded-2xl w-20 h-20 cursor-pointer border-2 ${
                    selectedImages[activeCategory] === variant
                      ? "border-green-800 border-3"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={variant}
                    alt={`${activeCategory} variant ${index + 1}`}
                    className={` 
                   ${activeCategory === "wall" && "object-left"}
                   ${activeCategory === "carpet" && ""}
                   ${activeCategory === "sofa" && "object-right"}
                   ${activeCategory === "shelf" && "object-right"} 
                  w-full h-full  object-cover   `}
                  />
                </div>
              )
            )}
            {/* Apply Changes Button */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
