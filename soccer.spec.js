describe('Tests for the Soccer Game', () =>{

    describe('Test the getTotalPoints Method', () => {
        it('Should return correct point total', () => {
                const points = getTotalPoints('wwdl')
                
                expect(points).toBe(7)

        })

        it('Should return the correct teams with correct points', () => {
            const team1 = {
                name: "Sounders",
                results: "wwwwwldl"
            }
            const team2 = {
                name: "Galaxy",
                results: "ldwdwlwl"
            }
            const expectedString = `Sounders: 16
            Galaxy: 11`

            const result = orderTeams(team1, team2)

            expect(result).toEqual(expectedString)
        })
    })
})