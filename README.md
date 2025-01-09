# Vehicle-Purchase

In this exercise, I wrote some code to help me prepare to buy a vehicle.

There are three tasks, one to determine if I will need to get a license, one to help me choose between two vehicles and one to estimate the acceptable price for a used vehicle.

Task #1 Determine if you will need a drivers license

Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.
Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether I need a license for that kind of vehicle.

Task #2 Choose between two potential vehicles to buy
I evaluated my options of available vehicles. I managed to narrow it down to two options but I need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

Task #3 Calculate an estimation for the price of a used vehicle
Now that I made my decision I want to make sure you get a fair price at the dealership. Since I am interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

I Implemented the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways if you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.
