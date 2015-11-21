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
            		  ['Ruby', 5],
                  ['Rails', 5],
                  ['Java', 7],
                  ['Git', 6],
                  ['Jira', 7],
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