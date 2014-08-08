var app = angular.module('store',['store-products']);	
app.controller('SimpleController',function(){
  this.products=gems;
});
var gems=[
{
	name: 'Decahedron',
	price: 2.95,
	description: '...',
	canPurchase: true,
	image:'2.jpg',
	reviews:[{
		stars:5,
		body:"Love this",
		author:"29.nitish@gmail.com"

	}]
},
{
	name: 'Penatgonal',
	price: 2.5,
	description: '...',
	canPurchase: false,
	image:'1.jpg',
	reviews:[{
		stars:2,
		body:"Hate this",
		author:"29.nitish@gmail.com"

	}
	]
}
];

app.controller('ReviewController',function(){
	this.review={};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review={};
	};
});
