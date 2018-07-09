# GOT App 🎉
All information about a popular TV Series Game of
Thrones and its related book series.
Information is from the [An Api of Ice and Fire](https://anapioficeandfire.com/)
#  Installation :
## Development server

Run  `ng serve`  for a dev server. Navigate to  `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build 🔧

Run  `ng build`  to build the project. The build artifacts will be stored in the  `dist/`  directory. Use the  `--prod`  flag for a production build.
## Description
>“An API of Ice And Fire is the world's greatest source for quantified and structured data from the universe of Ice and Fire (and the HBO series Game of Thrones)”

The app has 2  views .
#### Home view :
The Home view is the homepage and it contains the Books, Characters, Houses. Clicking any of those will navigate to the Specific  view with  respective region .

#### Specific Info view :
This view has the info based on the option selected on the home view. i.e if a Book is selected then the specific view has the information about that book.
This applies for Characters and house.

 - The book details contains the name, author, publisher , ISBN and
   characters mentioned in that book . If any of the  character is
   clicked the details of that character is shown .
 - The Character view has the details about that character such as Name,
   played by, gender, books, tv series and House. Clicking on the house
   gives the details of that house.
 - The House detail  view has the details as name, region, Coat of arms,
   words, founded, Sworn Members, and details about the founders.

## Options :

>The home view has the option to sort the listed details.

A toast message is shown for every successful sorting.


## TODO

 - [ ] Add Service Worker


 For any other features rise an issue .
