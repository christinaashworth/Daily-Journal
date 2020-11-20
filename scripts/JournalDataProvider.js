/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
  },
  {
      id: 2,
      date: "11/19/2020", 
      concept: "Form Building",
      entry: "I learned how to build a form today with HTML tags!",
      mood: "Happy"
  },
  {
      id: 3,
      date: "11/13/2020",
      concept: "Git and Github",
      entry: "Today, I learned how to properly do a Git workflow!",
      mood: "Happy"
  },
  {
      id: 4,
      date: "11/13/2020",
      concept: "Git and Github",
      entry: "DON'T accidentally commit your branch into main. Just don't do it.",
      mood: "Frustrated"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}