function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  



  
function calculerPrixBillet() {
    let age = parseInt(prompt("Entrez votre âge :"));
    let prixBillet;
  
    if (age <= 12) {
      prixBillet = 10;
    } else if (age >= 13 && age <= 17) {
      prixBillet = 15;
    } else if (age >= 18) {
      prixBillet = 20;
    } else {
      console.log("Âge invalide.");
    }
  
    if (prixBillet !== undefined) {
      alert("Le prix de votre billet est de : " + prixBillet + " $");
    }
  }
  
  calculerPrixBillet();
  



  function estPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();  
    
    if (str.length <= 1) {
      return true;
    }
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    return estPalindrome(str.slice(1, str.length - 1));
  }
  


  
function estBissextile(annee) {
    if (annee % 400 === 0) {
      return true;
    } else if (annee % 100 === 0) {
      return false;
    } else if (annee % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }