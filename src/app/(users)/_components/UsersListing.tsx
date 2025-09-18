"use client";
import { UserFiltersType, UserResponseType, UserType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import { TableSkeleton } from "@/components/ui/Skeletons";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const filtersInitialState: UserFiltersType = {
  gender: "",
  results: 50,
  page: 1,
  search: "",
};
const paginationModel = { page: 0, pageSize: 10 };

const UsersListing = () => {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>([]);
  const [status, setStatus] = useState<"loading" | "idle">("loading");
  const [filters, setFilters] = useState<UserFiltersType>(filtersInitialState);
  useEffect(() => {
    const getUsers = async () => {
      try {
        setStatus("loading");
        const UsersModule = await import("@/api/api");
        const { getUsersData } = UsersModule;
        const resp = await getUsersData(filters);
        
        const users = resp.results.map((user: UserResponseType) => ({
          id: user.login.uuid,
          thumbnail: user.picture.large,
          gender: user.gender,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
        }));
        setUsers(users);
      } catch (error) {
        // we can show toast or any other notification according to the requirement
        console.log(error);
      } finally {
        setStatus("idle");
      }
    };
    getUsers();
  }, [filters.gender, filters.page, filters.results]);
  console.log(users);
  

  const columns: GridColDef[] = [
    {
      headerName: "First Name",
      field: "firstName",
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      flex: 1,
    },
    {
      headerName: "Last Name",
      field: "lastName",
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      flex: 1,
    },
    {
      headerName: "Email",
      field: "email",
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      flex: 1,
    },
    {
      headerName: "Gender",
      field: "gender",
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      flex: 1,
    },
    {
      headerName: "Action",
      field: "action",
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      flex: 1,
      renderCell: (data) => {
        const id = data.row.id;
        const userData = JSON.stringify(data.row);
        return (
          <button
            className="text-black cursor-pointer"
            onClick={() => router.push(`/${id}?userData=${userData}`)}
          >
            View
          </button>
        );
      },
    },
  ];

  return (
    <div className="p-5 border border-gray-300 rounded-3xl overflow-hidden">
      <h1 className="text-2xl mb-3">Total Users {users.length}</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {status === "loading" ? (
        <div className="bg-white">
          <TableSkeleton rowsCount={4} colCount={4} />
        </div>
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          showToolbar
          disableColumnFilter
          disableColumnSelector
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 15, 20]}
        />
      )}
    </div>
  );
};

export default UsersListing;
