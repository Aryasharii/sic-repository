import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// Columns definition
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "role",
    headerName: "Role",
    width: 160,
    type: "singleSelect",
    valueOptions: ["admin", "user", "educator", "waste collector"],
  },
  { field: "username", headerName: "Username", flex: 1, minWidth: 130 },
  { field: "phone", headerName: "Phone", flex: 1, minWidth: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <div className={`font-bold ${params.value === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
        {params.value}
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 300,
    renderCell: (params) => (
      <Box display="flex" gap={1}>
        <Button variant="contained" color="primary" onClick={() => handleEdit(params.row.id)}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>
          Delete
        </Button>
        <Button variant="contained" color="default" onClick={() => handleResetPassword(params.row.id)}>
          Reset Password
        </Button>
      </Box>
    ),
  },
];

const initialRows = [
  { id: 1, role: "admin", username: "jon_snow", phone: "123456789", status: "Active" },
  { id: 2, role: "user", username: "cersei_l", phone: "987654321", status: "Active" },
  { id: 3, role: "educator", username: "jaime_l", phone: "543216789", status: "Active" },
  { id: 4, role: "waste collector", username: "arya_stark", phone: "112233445", status: "Active" },
  { id: 5, role: "user", username: "daenerys_t", phone: "778899001", status: "Active" },
  { id: 6, role: "admin", username: "melisandre", phone: "666666666", status: "Active" },
  { id: 7, role: "educator", username: "ferrara_c", phone: "777777777", status: "Active" },
  { id: 8, role: "waste collector", username: "rossini_f", phone: "888888888", status: "Active" },
  { id: 9, role: "user", username: "harvey_r", phone: "999999999", status: "Active" },
];

export default function DataTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredRows = rows.filter(row => 
    (row.username && row.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (row.phone && row.phone.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
    // Implement edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: "Inactive" } : row
      )
    );
  };

  const handleResetPassword = (id) => {
    console.log(`Reset password for user with ID: ${id}`);
    // Implement reset password logic here
  };

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px' }}
        />
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          "& .MuiDataGrid-cell": {
            fontSize: "1.2rem",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "1.4rem",
          },
        }}
      />
    </Paper>
  );
}
