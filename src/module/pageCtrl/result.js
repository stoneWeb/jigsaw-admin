'use strict';
let transferDataToView = (answers, question) => {
    var len = 0, result = question.map((item) => {
      var _ret = {
          title: item.title,
          type: item.type,
      }
      if(item.type == "radio" || item.type == "multi"){
          _ret.ret = new Array(item.options.length).fill(0);
          _ret.options = item.options
      }else{
          _ret.ret = []
      }
      return _ret
    });

    answers.forEach((ans) => {
        var ans = ans.answer;
        if(ans.length == question.length){
            len++;
            result.forEach((ret, i) => {
                if(ret.type == "radio"){
                    if('undefined' != ret.ret[ans[i]]){
                        ret.ret[ans[i]] += 1
                    }
                }else if(ret.type == "multi"){
                    ans[i].forEach((l) => {
                        if('undefined' != ret.ret[l]){
                          ret.ret[l] += 1
                        }
                    });
                }else{
                    ret.ret.push(ans[i])
                }

            })
        }
    });

    return {
      len: len,
      result: result
    }

}


export default class ResultsCtrl {
  constructor($location, $stateParams, $scope, Rest) {
    if($stateParams.id * 1 != $stateParams.id){
        $location.path('/dashboard');
        return
    }
    var Result = Rest.Result();
    Result.get({sid: $stateParams.id})
      .$promise.then((d) => {
          $scope.title = d.task.title;
          $scope.total = d.task.users.length;

          var d = transferDataToView(d.data, d.study);
          $scope.len = d.len;
          $scope.result = d.result;
      }, () => { alert('request error')});

    $scope.caleScale = (n) => {
        return parseInt(n*100) + "%"
    }
  }
}
