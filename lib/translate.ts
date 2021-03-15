interface day {
   full: string
   firstLetter: string
}

const HebrewConversion: { [key: string]: string | day } = {
   order: 'הזמן',
   left: 'מקומות פנויים',
   PERSONAL: 'אישי',
   TEAM: 'קבוצתי',
   back: 'חזרה',
   DELETE: 'בטל',
   BOOK: 'הזמן',
   sunday: { full: 'ראשון', firstLetter: 'א' },
   monday: { full: 'שני', firstLetter: 'ב' },
   tuesday: { full: 'שלישי', firstLetter: 'ג' },
   wednesday: { full: 'רביעי', firstLetter: 'ד' },
   thursday: { full: 'חמישי', firstLetter: 'ה' },
   friday: { full: 'שישי', firstLetter: 'ו' }
}

export function translate(word: string): string | day | undefined {
   if (HebrewConversion.hasOwnProperty(word)) {
      return HebrewConversion[word]
   } else {
      throw new Error("word don't exists in doctonary")
   }
}

export default HebrewConversion
