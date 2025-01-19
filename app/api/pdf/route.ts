import { NextResponse } from 'next/server'

export async function GET() {
  const pdfContent = `
SOLUTIONS 
SCIENCE 
1. (c) The reaction of a metal with an acid 
2. (b) MnO2 is reduced to MnCl2 & HCl is oxidized to Cl2 
3. (a) By adding acid to water with constant stirring  
4. (a) Na2CO3 
5. (b) y is non-metal and z is a metal 
6. (d) Amalgam 
7. (c) 16 Covalent bonds 
8. (d) Shark, Dogfish, Sting ray 
9. (b) II, III 
10. (b) Sexual reproduction  
11. (a) Electrical – chemical signals 
12. (b) Emasculation 
13. (c) Between C and F 
14. (a) real 
15. (d) (ii) and (iv) 
16. (b) Urea 
17. (a) Both A and R are true and R is the correct explanation of A. 
18. (a) Both A and R are true and R is the correct explanation of A. 
19. (c) (A) is true but (R) is false 
20. (b) Both A and R are true but R is not the correct explanation of A. 
21. Methanoic acid (HCOOH) 
 Use of baking soda can give relief on the stung area when applied on it. 
OR 
 (a) When sodium hydrogen carbonate is heated, sodium carbonate. Carbon dioxide and water 
 are formed. 
 (b) 2NaHCO3(s) →Na2CO3 + H2O(l) + CO2(g)↑ 
22. (i) PNS – Peripheral nervous system 
 Medulla – 
 (ii) Gustatory – Tongue 
 Olfactory – Nose 
23. (i) Bread contains starch which is acted upon by salivary amylase to form sweet sugar maltose 
 (ii) Human being have no enzyme for digestion of cellulose, it is roughage in human being . 
 In cow, cellulose digesting enzyme and fermenting bacteria are present which convert cellulose 
 in nutrient containing sugar. 
24. Coils of electric toasters and electric irons are made of an alloy rather than a pure metal because 
 (i) the resistivity of an alloy is much higher than that of pure metal and 
 (ii) an alloy does not undergo oxidation easily even at high temperature. 
 (iii) alloy have high melting point. 
25. The potential difference between two points in a current carrying conductor is said to be 1 V
when 1 joule of work is done to move a charge of 1 coulomb from one point to the other. 
 Therefore, 
1 volt = 1 joule / 1 coulomb
 1 V = 1 JC–1 
`

  return new NextResponse(pdfContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

