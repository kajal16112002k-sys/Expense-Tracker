/**
 * App.tsx
 * --------
 * Application entry point. Responsibilities are intentionally tiny:
 *   1. Wrap everything in <ExpenseProvider> so any screen can read/
 *      write expense data via the `useExpenses()` hook.
 *   2. Render <AppNavigator />, which owns all screen/tab structure.
 *   3. Render <StatusBar /> so the device status bar matches our theme.
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ExpenseProvider } from './src/context/ExpenseContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ExpenseProvider>
      <StatusBar style="light" backgroundColor="#0F766E" />
      <AppNavigator />
    </ExpenseProvider>
  );
}
