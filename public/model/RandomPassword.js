const LowercaseData = 'abcdefghijklmnopqrstuvwxyz'
const UppercaseData = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NumbersData = '0123456789'
const SymbolsData = '~`!@#$%^&*()_+-={}[]|\;"<>,.?/'


function getPassword(Length, Lowercase, Uppercase, Numbers, Symbols, Exclude) {

  let Password = ''
  let Data = ''
 
  if (Lowercase === 'active') { Data += LowercaseData }
  if (Uppercase === 'active') { Data += UppercaseData }
  if (Numbers === 'active') { Data += NumbersData }
  if (Symbols === 'active') { Data += SymbolsData }
 
  const filterData = Data.split('').filter(ExData => !Exclude.split('').includes(ExData)).join('') //排除字串
  //split('') 字符串變成數組 join('')數組變為字符串

  
  for (let i = 0; i < Length; i++) {
    const randomIndex = Math.floor(Math.random() * filterData.length)
    Password += filterData.charAt(randomIndex)
  }
  return Password
}



module.exports = getPassword


