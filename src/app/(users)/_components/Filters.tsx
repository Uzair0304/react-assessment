import { genderOptions } from "@/lib/constants";
import { UserFiltersType } from "@/lib/types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

type ComponentProps = {
  filters: UserFiltersType;
  setFilters: Dispatch<SetStateAction<UserFiltersType>>;
};
const Filters = ({ filters, setFilters }: ComponentProps) => {
  return (
    <div className="grid md:grid-cols-3 mb-3 gap-3">
      <div>
        <p className="mb-2">Filter by gender:</p>
        <FormControl fullWidth>
          <InputLabel id="gender">Select Gender</InputLabel>
          <Select
            labelId="gender"
            sx={{ fontSize: "14px","& .MuiSelect-select":{padding:"15px"} }}
            id="genderSelect"
            value={filters.gender}
            label="Age"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                gender: e.target.value,
                page: 1,
              }))
            }
          >
            {genderOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* The api does not provide search feature but for real scenarios 
      we send the search query as a query param to filter the results based
      on search. We can use debouncing for it to make better performance
       */}
      {/* <div>
        <p className="mb-2">Search by first name:</p>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Search"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
        />
      </div> */}
    </div>
  );
};

export default Filters;
