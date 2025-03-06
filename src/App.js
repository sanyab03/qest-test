import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import { FiHeart } from "react-icons/fi";

const DraggableElement = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, id: uuidv4() },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 rounded-lg shadow-md cursor-move transition-all bg-white hover:bg-gray-200 border border-gray-300 text-center font-medium text-gray-700 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {label}
    </div>
  );
};

const DropZone = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["TEXT", "IMAGE", "BUTTON"],
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[500px] p-6 border-2 rounded-lg transition-all shadow-lg flex flex-col gap-3 items-center justify-start bg-gradient-to-r from-blue-50 to-purple-50 ${
        isOver ? "border-blue-500" : "border-gray-300"
      }`}
    >
      {children.length > 0 ? children : <p className="text-gray-500 text-lg">Drag elements here</p>}
    </div>
  );
};

const PropertyEditor = ({ selectedElement, onUpdate }) => {
  const handleChange = (e) => {
    onUpdate({ ...selectedElement, label: e.target.value });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Properties</h3>
      {selectedElement ? (
        <input
          type="text"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
          value={selectedElement.label}
          onChange={handleChange}
        />
      ) : (
        <p className="text-gray-500 text-lg">Select an element</p>
      )}
    </div>
  );
};

const DragDropBuilder = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleDrop = (item) => {
    const newElement = { id: item.id, type: item.type, label: item.type };
    setElements((prev) => [...prev, newElement]);
  };

  const updateElement = (updatedElement) => {
    setElements((prev) => prev.map((el) => (el.id === updatedElement.id ? updatedElement : el)));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-6 p-8 bg-gray-100 min-h-screen">
        {/* Elements Sidebar */}
        <div className="w-1/4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Elements</h3>
          <div className="flex flex-col gap-4">
            <DraggableElement type="TEXT" label="Text" />
            <DraggableElement type="IMAGE" label="Image" />
            <DraggableElement type="BUTTON" label="Button" />
          </div>
        </div>
        
        {/* Canvas */}
        <div className="w-2/4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Canvas</h3>
          <DropZone onDrop={handleDrop}>
            {elements.map((el) => (
              <div
                key={el.id}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-300 cursor-pointer hover:bg-gray-200 transition-all w-full text-center flex items-center justify-between text-gray-700 font-medium"
                onClick={() => setSelectedElement(el)}
              >
                {el.label}
                <FiHeart className="text-gray-500" />
              </div>
            ))}
          </DropZone>
        </div>
        
        {/* Property Editor */}
        <div className="w-1/4">
          <PropertyEditor selectedElement={selectedElement} onUpdate={updateElement} />
        </div>
      </div>
    </DndProvider>
  );
};

export default DragDropBuilder;
