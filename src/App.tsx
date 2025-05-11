import { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Box, Paper, useTheme, Divider } from '@mui/material';
import UserTable from './components/UserTable';
import { fetchUsers } from './services/userService';
import type { User } from './types/user';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '12px',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                }}
              >
                <PeopleAltIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: 0.5,
                  }}
                >
                  User Management Dashboard
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#64748B',
                    fontSize: '1.1rem',
                  }}
                >
                  Manage and view all user information in one place
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 3, borderColor: 'rgba(0, 0, 0, 0.08)' }} />
          </Box>
          
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="400px"
            >
              <CircularProgress size={60} thickness={4} />
            </Box>
          ) : error ? (
            <Typography
              color="error"
              sx={{
                p: 3,
                bgcolor: 'error.light',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              {error}
            </Typography>
          ) : (
            <UserTable users={users} />
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
