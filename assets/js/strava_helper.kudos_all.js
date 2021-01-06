strava_helper = (function (strava_helper) {

    strava_helper.kudos_all = {

        count: 0,
        kudoTimer: 0,

        getKudosAllImage: function () {
            return '<span title="Give Kudos to all visible activities!"></span>'
        },

        giveKudosToAll: function () {
            console.log('giveKudosToAll')
            strava_helper.kudos_all.giveNextKudo()
        },

        giveNextKudo: function () {

            strava_helper.kudos_all.count = $('button.js-add-kudo').length

            if(strava_helper.kudos_all.count>0){

                $('button.js-add-kudo').firstChild().trigger('click')
                strava_helper.kudos_all.showKudosCount()
                strava_helper.kudos_all.kudoTimer = window.setTimeout(strava_helper.kudos_all.giveNextKudo, 1000)

            }else{
                if(timer!==null){
                    clearTimeout(timer)
                }
                let timer = window.setTimeout(function () {
                    strava_helper.kudos_all.resetKudosButton()
                }, 3000)
            }
        },

        showKudosCount: function () {
            if (strava_helper.kudos_all.count === 0) {
                return
            }
            $('#strava-helper-kudos-all-button')
                .text(strava_helper.kudos_all.count.toString() + 'x')
                .addClass('strava-helper-kudos-all-button-result animated bounce')
        },

        resetKudosButton: function () {
            $('#strava-helper-kudos-all-button')
                .html(strava_helper.kudos_all.getKudosAllImage())
                .removeClass('strava-helper-kudos-all-button-result animated bounce')
        },

        init: function () {
            $('<li/>').append(
                $(
                    '<div/>',
                    {
                        id: 'strava-helper-kudos-all-button',
                        title: 'Give Kudos to all visible items.',
                        html: strava_helper.kudos_all.getKudosAllImage()
                    }
                )
            ).appendTo('.user-nav')

            $('#strava-helper-kudos-all-button').on('click', strava_helper.kudos_all.giveKudosToAll)
        },
    }

    strava_helper.kudos_all.init()

    return strava_helper

}(strava_helper))
