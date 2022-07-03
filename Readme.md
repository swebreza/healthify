# **HEALTHIFY**🏥

## **Problem**:-
- The patient who requires an ambulance service immediately must wait for the Hospital’s ambulances.
- Hospital ambulances are sometimes busier (like in the situation of covid the regular patients were facing issues).
- Some places (mostly the countryside) have hospitals far away from where hospital ambulances may take time to reach.

## **Solution**:-
- Healthify will connect the patient to the nearest ambulance.
- Not only the ambulances provided by Hospitals but also the volunteer drivers who register to serve society will be there on the app.
- Nowadays cabs are more active in remote areas, it will be helpful if someone needs to go to the hospital.

## **WorkFlow**:-
### User:-
- User will be able to se all the ambulances on the map.
- The ambulance which will take the least time to reach the user will be assigned to the user once booked.
- The user will be able to see the actual location of the assigned ambulance.
### Ambulance or vehicle Owner:-
- Once they are assigned, they will be redirected to the navigation of the user.
## **Complexity**:-
- O(n) where n is the number of ambulances for single person.
- O(n*m) for all the m users.
## How:-
- We are using linear search to all the nearby ambulances according to time taken to reach and and the api will return the location of the ambulance which will take lowest time, according to the traffic and distance.
