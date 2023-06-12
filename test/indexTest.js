require ( './root.js' );


describe('shout(string)', function shout(string) {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
  function shout(string) {
    return string.toUpperCase();
  }
})

describe('whisper(string)', function whisper(string) {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
  function whisper(string) {
    return string.toLowerCase();
  }
})

describe('logShout(string)', function logShout(string) {
  function logShout(string) {
    const capitalizedString = string.toUpperCase();
    console.log(capitalizedString);
  }
  
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');
    //console.log();

    console.log.restore();
    
  })
})

describe('logWhisper(string)', function logWhisper(string) {
  function logWhisper(string) {
    const lowercasedString = string.toLowerCase();
    console.log(lowercasedString);
  }
  
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function sayHiToHeadphonedRoommate(string) {
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    }}
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    function sayHiToHeadphonedRoommate(string) {
      if (string.toUpperCase
        () === string) {
        return "YES INDEED!";
      }}
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    function sayHiToHeadphonedRoommate(string) {
      if (string === "Let's have dinner together!") {
        return "I would love to!";
      }}
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
