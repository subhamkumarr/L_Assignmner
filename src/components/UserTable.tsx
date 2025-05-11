import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  TableSortLabel,
  useTheme,
  InputAdornment,
  Chip,
  IconButton,
  Tooltip,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import type { User } from '../types/user';

type SortField = 'name' | 'email' | 'company.name';
type SortOrder = 'asc' | 'desc';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedUsers = useMemo(() => {
    return users
      .filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = sortField === 'company.name' ? a.company.name : a[sortField];
        const bValue = sortField === 'company.name' ? b.company.name : b[sortField];
        
        if (sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        }
        return bValue.localeCompare(aValue);
      });
  }, [users, sortField, sortOrder, searchTerm]);

  // Function to generate a color based on the name
  const getAvatarColor = (name: string) => {
    const colors = [
      '#FF6B6B', // Coral
      '#4ECDC4', // Turquoise
      '#45B7D1', // Sky Blue
      '#96CEB4', // Sage
      '#FFEEAD', // Cream
      '#D4A5A5', // Dusty Rose
      '#9B59B6', // Purple
      '#3498DB', // Blue
      '#E67E22', // Orange
      '#2ECC71', // Green
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        placeholder="Search by name or email..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ 
              backgroundColor: '#F8FAFC',
              borderBottom: '2px solid #E2E8F0',
            }}>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={sortField === 'name' ? sortOrder : 'asc'}
                  onClick={() => handleSort('name')}
                  sx={{ 
                    color: '#475569',
                    fontWeight: 600,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'email'}
                  direction={sortField === 'email' ? sortOrder : 'asc'}
                  onClick={() => handleSort('email')}
                  sx={{ 
                    color: '#475569',
                    fontWeight: 600,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'company.name'}
                  direction={sortField === 'company.name' ? sortOrder : 'asc'}
                  onClick={() => handleSort('company.name')}
                  sx={{ 
                    color: '#475569',
                    fontWeight: 600,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Company Name
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ color: '#475569', fontWeight: 600 }}>Phone</TableCell>
              <TableCell sx={{ color: '#475569', fontWeight: 600 }}>Website</TableCell>
              <TableCell sx={{ color: '#475569', fontWeight: 600 }}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: getAvatarColor(user.name),
                        width: 40,
                        height: 40,
                        fontSize: '1rem',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Box sx={{ fontWeight: 600, color: '#1E293B' }}>
                        {user.name}
                      </Box>
                      <Box sx={{ fontSize: '0.875rem', color: '#64748B' }}>
                        @{user.username}
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    icon={<BusinessIcon />}
                    label={user.company.name}
                    sx={{
                      backgroundColor: '#E3F2FD',
                      color: '#1976D2',
                      fontWeight: 600,
                      '& .MuiChip-icon': {
                        color: '#1976D2',
                      },
                      '&:hover': {
                        backgroundColor: '#BBDEFB',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Tooltip title="Visit website">
                    <IconButton
                      size="small"
                      href={`https://${user.website}`}
                      target="_blank"
                      sx={{ 
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        },
                      }}
                    >
                      {user.website}
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Full address">
                    <Box sx={{ maxWidth: 300 }}>
                      {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                    </Box>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable; 