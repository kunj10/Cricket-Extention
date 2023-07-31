async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=73a14048-d364-4a77-8bb5-cefbf8e30e56&offset=0")
      .then(data => data.json())
      .then(data => {
        if (data.status !== "success") return [];
        const matchesList = data.data;
        if (!matchesList) return [];
  
        const relevantData = matchesList.map(match => `${match.name},${match.status}`);
        console.log(relevantData);
  
        // Filter out any empty or null values before rendering
        const filteredData = relevantData.filter(match => match.trim() !== "");
        document.getElementById("matches").innerHTML = filteredData.map(match => `${match}<hr>`).join('');
        
        return filteredData;
      });
  }
  
  getMatchData();
  