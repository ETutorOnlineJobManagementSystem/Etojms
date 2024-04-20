import React, { useState } from 'react';

const FolderTree = ({ onSelectFolder }) => {
  return <div className="p-4 bg-gray-200">Folder Tree</div>;
};

const UploadButton = ({ onUpload }) => {
  const handleUpload = (event) => {
    const files = event.target.files;
    onUpload(files);
  };

  return (
    <div className="p-4 bg-gray-200">
      <input type="file" multiple onChange={handleUpload} className="border border-gray-300 p-2 rounded-md" />
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <div className="p-4 bg-gray-200">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-md w-full"
      />
    </div>
  );
};

const FilterOptions = ({ onFilter }) => {
  const [options, setOptions] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
    onFilter(options);
  };

  return (
    <div className="p-4 bg-gray-200">
      {/* Implement filter options UI and handle change */}
    </div>
  );
};

const MaterialList = ({ materials, onSelectMaterial }) => {
  return (
    <div className="p-4 bg-gray-200">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          onSelect={onSelectMaterial}
        />
      ))}
    </div>
  );
};

const MaterialCard = ({ material, onSelect }) => {
  return (
    <div
      className="p-4 bg-white border border-gray-300 rounded-md shadow-md cursor-pointer hover:shadow-lg"
      onClick={() => onSelect(material)}
    >
      {material.name}
    </div>
  );
};

const MaterialPreview = ({ material }) => {
  return <div className="p-4 bg-gray-200">Material Preview</div>;
};

const Analytics = () => {
  return <div className="p-4 bg-gray-200">Analytics and Insights</div>;
};

const Info = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterOptions, setFilterOptions] = useState({});
  const [materials, setMaterials] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleMaterialSelection = (material) => {
    setSelectedMaterial(material);
    setPreviewVisible(true);
  };

  const handleFolderSelection = (folder) => {
    setSelectedFolder(folder);
    setSelectedMaterial(null);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleFilter = (options) => {
    setFilterOptions(options);
  };

  const handleUpload = (files) => {
    // Implement upload functionality
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="h-screen overflow-y-auto">
          <FolderTree onSelectFolder={handleFolderSelection} />
          <UploadButton onUpload={handleUpload} />
        </div>
      </div>
      <div className="w-3/4">
        <div className="h-screen overflow-y-auto">
          <div className="p-4 bg-gray-100">
            <SearchBar onSearch={handleSearch} />
            <FilterOptions onFilter={handleFilter} />
          </div>
          <MaterialList
            materials={materials}
            onSelectMaterial={handleMaterialSelection}
          />
          {previewVisible && selectedMaterial && (
            <MaterialPreview material={selectedMaterial} />
          )}
        </div>
      </div>
      <div className="w-1/4">
        <div className="h-screen overflow-y-auto">
          <Analytics />
        </div>
      </div>
    </div>
  );
};

export  {Info,Analytics,MaterialCard,MaterialPreview,MaterialList,SearchBar,FilterOptions,FolderTree,UploadButton};
