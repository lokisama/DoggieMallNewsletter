angular.module('Newsletter', [])
  .controller('NewsletterController', function($scope, $http) {
    var newsletter = this;
    newsletter.title = '30 days Money Back Guarantee,FREE Shipping!';
    newsletter.data = [
      {
        title:'Number Lock',
        desc:'Nice 3 Digit Dial Combination Code Number Lock Padlock For Luggage Zipper Bag Backpack Handbag Suitcase Drawer', 
        oldprice:17.94 ,
        price:5.98,
        image:'http://g03.a.alicdn.com/kf/HTB1b9zyJXXXXXcuXFXXq6xXFXXXH/Nice-3-Digit-Dial-Combination-Code-Number-Lock-Padlock-For-Luggage-Zipper-Bag-Backpack-Handbag-Suitcase.jpg',
        buy:'http://www.ozgrabnow.com/?fid=57625798e4b0c424b5dc8e15'
      },{
        title:'Wrench Opener Watch',
        desc:'1pc Two Feet Cover Wrench Opener Watch Back Case Opener Spanner Watch Handle Case Opener Repair Kit Tool Watch Accessories', 
        oldprice:11.96 ,
        price:5.98,
        image:'http://g03.a.alicdn.com/kf/HTB1d97ILFXXXXcsXFXXq6xXFXXXe/1pc-Two-Feet-Cover-Wrench-Opener-Watch-Back-Case-Opener-Spanner-Watch-Handle-Case-Opener-Repair.jpg',
        buy:'http://www.ozgrabnow.com/?fid=57625798e4b0c424b5dc8e15'
      },{
        title:'Wrench Opener Watch',
        desc:'1pc Two Feet Cover Wrench Opener Watch Back Case Opener Spanner Watch Handle Case Opener Repair Kit Tool Watch Accessories', 
        oldprice:11.96 ,
        price:5.98,
        image:'http://g03.a.alicdn.com/kf/HTB1d97ILFXXXXcsXFXXq6xXFXXXe/1pc-Two-Feet-Cover-Wrench-Opener-Watch-Back-Case-Opener-Spanner-Watch-Handle-Case-Opener-Repair.jpg',
        buy:'http://www.ozgrabnow.com/?fid=57625798e4b0c424b5dc8e15'
      },{
        title:'Wrench Opener Watch',
        desc:'1pc Two Feet Cover Wrench Opener Watch Back Case Opener Spanner Watch Handle Case Opener Repair Kit Tool Watch Accessories', 
        oldprice:11.96 ,
        price:5.98,
        image:'http://g03.a.alicdn.com/kf/HTB1d97ILFXXXXcsXFXXq6xXFXXXe/1pc-Two-Feet-Cover-Wrench-Opener-Watch-Back-Case-Opener-Spanner-Watch-Handle-Case-Opener-Repair.jpg',
        buy:'http://www.ozgrabnow.com/?fid=57625798e4b0c424b5dc8e15'
      }];

      $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
      .success(function(response) {
        console.log(response);
      });
 
  });