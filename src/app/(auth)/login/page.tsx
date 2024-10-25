'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import * as yup from 'yup';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Role } from '@/types/type';
import { useRouter } from 'next/navigation';

const roleValues = Object.values(Role).filter(value => typeof value === 'number');
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  role: yup.number().oneOf(roleValues, 'Select a valid role').required('Role is required'),
});

type FormData = {
  username: string;
  password: string;
  role: Role; 
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      role: Role.user,
    },
  });

  const onSubmit = (data: FormData) => {
    Cookies.set('userData', JSON.stringify(data), { expires: 1 }); 
    location.href = '/'
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', mt: 1 }}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
        <FormControl fullWidth margin="normal" error={!!errors.role}>
          <InputLabel id="select-role-label">Role</InputLabel>
          <Controller
            name="role"
            control={control}
            defaultValue={Role.user}
            render={({ field }) => (
              <Select
                {...field}
                labelId="select-role-label"
                label="Role"
              >
                <MenuItem value={Role.admin}>Admin</MenuItem>
                <MenuItem value={Role.user}>User</MenuItem>
              </Select>
            )}
          />
          {errors.role && <Typography variant="caption" color="error">{errors.role.message}</Typography>}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Login
        </Button>
        <Button variant="contained" color="secondary" onClick={()=>router.push('/')} fullWidth sx={{ mt: 3 }}>
          HomePage
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;