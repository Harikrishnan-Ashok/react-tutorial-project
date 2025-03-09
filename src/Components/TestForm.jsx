import React from "react";
import { Autocomplete, Button, Checkbox, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';

export default function TestForm(){

	const list=["op1","op2","op3"]
	const {register,handleSubmit}=useForm()

	const onSubmit=(data)=>{
		console.log(data)
	}

	return(<>
		<h1>This is a Test Form</h1>
		<form onSubmit={handleSubmit(onSubmit)} >
			<Stack m={4} direction={"row"} gap={2} >
				<label> Name :</label>
				<input id="name" {...register("name")} />
				<Checkbox {...register("enable")} ></Checkbox>
				<Autocomplete
					options={list}
					sx={{ width: 300 }}
					renderInput={(params) => <TextField {...params} label="Movie" {...register("Movie")} />}
				/>
			</Stack>
			<Button variant="contained" type="submit" >Submit</Button>
		</form>
	</>)
}
