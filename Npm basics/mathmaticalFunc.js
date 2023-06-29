console.log('inside mathematical function');
export const addition = (a,b) => {
    console.log(`addition of number ${a} and ${b} is ${a+b}`);
    return a+b
}

export const multiplication = (a,b) => {
    console.log(`multiplication of number ${a} and ${b} is ${a*b}`);
    return a*b
}

multiplication(100,3);

// export means moving this functionality out to be reused in other files
// named export 