import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: {},
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "userActive",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userActive = action.payload;
    },
    cleanUser: (state, action) => {
      state.userActive = {};
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    addUserAppointments: (state, action) => {
      state.userAppointments = state.userAppointments.concat(action.payload);
    },
    cancelUserAppointments: (state, action) => {
      state.userAppointments = state.userAppointments.map((appointment) => {
        if (appointment.id === action.payload) {
          return {
            ...appointment,
            status: "cancelled",
          };
        }
        return appointment;
      });
    },
  },
});

export const {
  loginUser,
  cleanUser,
  setUserAppointments,
  addUserAppointments,
  cancelUserAppointments,
} = userSlice.actions;
