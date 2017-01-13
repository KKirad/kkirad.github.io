$(document).ready(function(){
	var c3_options = {
            bindto: '#chart_bar',
            axis: {
            y: {
              min: 1,
              max: 10
              }
            },
            data: {
              	columns: [
                 	['Jquery', 5],
            		  ['Javascript', 5],
            		  ['HTML', 7],
            		  ['CSS', 6],
            		  ['Ruby', 6],
                  ['Rails', 6],
                  ['Java', 5],
                  ['Git', 6],
                  ['Jira', 7],
                  ['DBMS', 6]
            	],
              type: 'bar'
            },
            bar: {
        		width: {
            		ratio: 0.4         		}
   			    },
        }
    c3.generate(c3_options);
});