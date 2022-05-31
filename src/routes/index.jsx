import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Meal from '../pages/Meal';

const AppRouter = () => (
 <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/meal/:id" element={<Meal />} />
 </Routes>
);

export default AppRouter;
