
curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Rajat","last_name":"Mahajan"}' "http://localhost:3000/profile"
sleep 1 
curl -H "Content-Type: application/json" -X PUT -d '{"first_name":"kunjesh","last_name":"Mahajan"}' "http://localhost:3000/profile/0"
sleep 1
curl "http://localhost:3000/profile?id=0" 
sleep 1
curl  -X DELETE "http://localhost:3000/profile/0"

#try this without trim
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Rajat","last_name":"  "}' "http://localhost:3000/profile"

# adding junk data but it won't be added to server
curl -H "Content-Type: application/json" X POST -d '{"first_name":"Rajat","last_name":"Mahajan","junkdat":"sdf"}' "http://localhost:3000/profile"

# IF not send proper data we will get error.
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Rajat"}' "http://localhost:3000/profile