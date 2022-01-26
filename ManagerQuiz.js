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
             alert("Bạn đã trả lời đúng. Xin mời làm câu tiếp theo.");
         }else {
             alert("Bạn đã trả lời sai. Vui lòng chơi lại")}

    }
    nextQuiz(){
        if (this.current<this.limit-1){
            this.current++;
        }else {
            alert("Hoàn thành");
            this.current=0;
        }
    }
    resetGame(){
        this.current=0;
    }
    endGame(){
        this.current=0;
    }
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
}