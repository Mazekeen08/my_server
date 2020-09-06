import express from 'express';

import { createUser, getUser } from '../Controllers/users.js';
const router = express.Router();
let users =  []
// all routes in here are starting with /users
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});
router.post('/',createUser);


router.get('/:id', (req,res)=>{
const { id } = req.params;
const foundUser = users.find((user) => user.id == id);
res.send(foundUser);
});
router.delete('/:id', (req,res) => {
    const  { id } = req.params;
    users  = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from the Database!!..`);
});
router.patch('/:id', (req,res) => {
    const  { id } = req.params;

    const {FirstName, LastName, Department, GraduationYear} = req.body;
    const users  = users.find((user) => user.id == id);
 if(FirstName) user.FirstName = FirstName;
 if(LastName) user.LastName = LastName;
 if(Department) user.Department = Department;
 if(GraduationYear) user.GraduationYear = GraduationYear;
 
    res.send(`User with id ${id} updated in the Database!!..`);
});
export default router;