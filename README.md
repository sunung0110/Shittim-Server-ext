This is a extra api for https://github.com/Neoexm/Shittim-Server

install nodeJS https://nodejs.org

first, run the server


all edit is in the extapi/main.js

and find getPolicyList.nx in mitmweb.

got response, and view in hex stream.

copy the hex stream, and paste to policyhex.

repeat it for getUserInfo.nx.

find signInWithTicket.nx in mitmweb.

view in raw, and copy.

paste to response for signInWithTicket.nx


and add this files on Shittim-Server folder.



The reason we need to change these is because for this to work properly, these three must match the user's ID.

When I modified these values, the program stopped working properly and crashed.
