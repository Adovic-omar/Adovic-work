import InputField from "./reusableComponents/InputField";

export default function Search({searchTerm, setSearchTerm}) {
    
    return (
        <div>
            <InputField 
                label="Search Projects"
                type="search"
                name="search"
                placeholder="Search a project"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />   
        </div>
    )
}