export default function randomID () {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', 
                  '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const index = Math.floor(Math.random() * 35) + 1;
  let key = '';
  for (let i = 0; i < 8; i++) {
    key += symbols[index];
  };
  return key;
};
