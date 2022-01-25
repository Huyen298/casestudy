class ManagerQuiz {
    constructor(limit) {
        this.limit= limit;
        this.quizs=[];
        this.current= 0;
    }
    checkAnswer(ans){
        if(ans===this.quizs[this.current].correct){
            return true;
        }else {
            return false;
        }
    }
    chooseAnswer(ans){
         if(this.checkAnswer(ans)) {
             alert("đúng");
         }else {
             alert("sai")}

    }
    nextQuiz(){
        if (this.current<this.limit-1){
            this.current++;
        }else {
            alert("Hoàn thành");
            this.current=0;
        }
    }
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
    deleteQuiz(index){
        this.quizs.splice(index,1)
    }

}