/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
          "Date: ${entry.date}"<br>
          "Topics covered: ${entry.concept}"<br>
          "Thoughts: ${entry.entry}"<br>
          "Mood: ${entry.mood}"<br><br>
      </section>
  `
}