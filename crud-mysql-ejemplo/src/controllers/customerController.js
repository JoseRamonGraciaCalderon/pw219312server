 const controller={};
 controller.list=(req,res)=>{
 	req.getConnection((err,conn)=>{
 		conn.query('SELECT * FROM customers',(err,customers)=>{
 			if(err){
 				res.json(err)
 			}
 			//console.log(customers);
 			res.render('customer',{
 				data: customers
 			})
 		})

 	})
 }
controller.save=(req,res)=>{
	console.log(req.body)
	const data=req.body;
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO customers set ?',[data],(err,customers)=>{
			res.redirect('/');
		});
	})
}
controller.delete = (req,res) =>{
	const { id } = req.params;
	req.getConnection((err,conn) =>{
		conn.query('DELETE FROM  customers WHERE id = ?',[id], (err,rows) =>{
			res.redirect('/');
		});
	})
	
}

controller.edit= (req,res) =>{
	const { id } = req.params;
	req.getConnection((err,conn) =>{
		conn.query('SELECt * FROM customers WHERE id= ? ',[id],(err,customer)=>{
			 //llamar la pantalla de edicion de datos
			 res.render('customer-edit',{
			 	data: customer[0]
			 })

		})
	})
}
controller.update=(req,res)=>{
	const { id }=req.params;
	const newcustomer=req.body; 
	req.getConnection((err,conn)=>{
		conn.query('UPDATE customers set ? WHERE id=?',[newcustomer,id],(err,rows)=>{
	res.redirect('/');
		})
	})
}
 
 module.exports=controller;