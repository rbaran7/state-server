#!/bin/bash
echo SHOULD return: Montana, Long = -116.063531, Lat = 48.99995
curl -X POST -d "value%5Blongitude%5D=-116.063531&value%5Blatitude%5D=48.99995" http://localhost:8080/
echo 
echo ________________________________________________________________
echo
sleep 2s

echo SHOULD return: Pennsylvania, Long = -77.036133, Lat = 40.513799
curl -X POST -d "value%5Blongitude%5D=-77.036133&value%5Blatitude%5D=40.513799" http://localhost:8080/
echo
echo _________________________________________________________________
echo
sleep 2s

echo SHOULD return: Vermont, Long = -73.344723, Lat = 45.006138
curl -X POST -d "value%5Blongitude%5D=-73.344723&value%5Blatitude%5D=45.006138" http://localhost:8080/
echo
echo _________________________________________________________________
echo
sleep 2s

echo SHOULD return: No State Found Message, Long = -34, Lat = 4
curl -X POST -d "value%5Blongitude%5D=-34&value%5Blatitude%5D=4" http://localhost:8080/
echo
echo _________________________________________________________________
echo
sleep 2s
